数组
----

bash 只支持一维数组。

数组下标从 0 开始，下标可以是整数或算术表达式，其值应大于或等于 0。

创建数组
^^^^^^^^^^^^^^^^^^^^^^^^

.. include:: code/create.sh
   :code: 

访问数组元素的区别
^^^^^^^^^^^^^^^^^^^^^^^^

``${colors[*]}`` 和 ``${colors[@]}`` 这两个有比较明显的区别, 下边来说明下

.. include:: code/access.sh
   :code: 

访问数组的元素和长度
^^^^^^^^^^^^^^^^^^^^^^^^

.. include:: code/access-length.sh
   :code: 


数组中元素的添加和删除
^^^^^^^^^^^^^^^^^^^^^^

.. include:: code/access-mgr.sh
   :code: sh


循环读取数组的数据
^^^^^^^^^^^^^^^^^^^^^^

.. include:: code/list.sh
   :code: sh

帮助链接
^^^^^^^^^^^^^^^^^^^^^^
- `sprintf <https://www.runoob.com/linux/linux-shell-printf.html>`_ 