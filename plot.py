import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import t

data001 = np.load("001.npy")
data002 = np.load("002.npy")
data003 = np.load("003.npy")
data004 = np.load("004.npy")

print data004

combine = np.row_stack((data001, data002, data003, data004))
n = np.shape(combine)[0]
print np.shape(combine)

y_mean = np.mean(combine, axis=0)
print y_mean
# standard deviation
y_std = np.std(combine, axis=0)

# standard error
y_se = y_std / np.sqrt(np.shape(combine)[0])

# 95% confidence interval
'''
dof = np.shape(combine)[0] - 1
alpha = 1.0 - 0.95
conf_interval = t.ppf(1-alpha/2., dof) * y_std * np.sqrt(1.+1./n)
'''

# x_list =[0, 50, 100, 200, 300, 500, 750, 1000, 1250, 1500, 2000, 3000, 5000]

x_list = [2.6,
2.76,
3.48,
5.12,
6.28,
7.96,
12.64,
17.84,
20.6,
22.52,
28,
40.32,
65.76
]


x_list_user_percieved = [2.16,
2.52,
3.44,
4.84,
5.4,
5.56,
6,
7.92,
11.44,
11.84,
14.84,
21.76,
35.8
]

x_list_user_no_adds_amazon = [1.34,
1.56,
2.38,
3.56,
4.08,
4.26,
5.16,
6.4,
9,
9.96,
12.86,
20.52,
30.52
]

x = np.array(x_list_user_no_adds_amazon)

plt.figure()
plt.style.use('ggplot')
plt.xlabel('latency')
plt.ylabel('grade')
plt.plot(x, y_mean,"blue")
plt.errorbar(x, y_mean, yerr=y_se, fmt="-o",ecolor='red', alpha=.5)
plt.legend(['mean','Standard Error'],
           loc='upper right',
           numpoints=1,
           fancybox=True)
plt.show()