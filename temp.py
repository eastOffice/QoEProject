import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import t

x_list_youtube =[1.16,
1.56,
2.12,
3.52,
4.16,
4.88,
6.92,
7.4,
8.28,
13,
20.64,
28.8
]

x = np.array(x_list_youtube)

y_mean =[4.66666667, 
4.6,
4.43333333,
3.66666667,
3.26666667,
3,
2.46666667,
2.26666667,
2.06666667,
1.8,
1.5,
1.33333333]

y_se = [0.0960663,
0.1059299,
0.12599534,
0.20045067,
0.15832508,
0.15346197,
0.1770787,
0.11069452,
0.13689812,
0.17256932,
0.12657952,
0.13457753]

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