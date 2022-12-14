# 设计模式

## 1. 设计模式是什么，有什么用？

### 是什么：

​	设计模式是解决问题的通用开发方案，也是前辈不断摸索总结出来的好的编程方法，可以理解为游戏攻略。

​	设计模式的本质是面向对象设计原则的实际运用，是对类的封装性、继承性和多态性以及类的关联关系和组合关系的充分理解。

### 目的：

​	使程序更加标准化，代码编制更加工程化，提高代码复用性，可读性。

​	让项目更好维护，减少烂代码。



## 2. 软件开发原则

​	单一职责原则（SRP）：原子性，高内聚低耦合，只做一件事。	

​	开放封闭原则（OCP）：对扩展开放，对修改封闭。

​	里氏代换原则（LSP）：继承必须确保超类所拥有的性质在子类中依然成立。

​	依赖倒转原则（DIP）：依赖于抽象而不依赖于具体。

​	接口隔离原则（ISP）：使用多个隔离的接口比使用单独的接口好，尽量为客户端提供单独接口，而不是提供总接口。

​	迪米特法则（LOD）：一个软件实体应该尽可能少的与其他实体发生相互作用。

​	合成/聚合复用原则（CARP）：尽量使用合成、聚合，而不是继承关系达到复用原则。



## 3. 主流设计模式

### 一、创建型模式：

#### 	定义：

​		描述怎么去创建一个对象，并在创建的同时隐藏创建逻辑的方式，使对象的创建与使用分离。



#### 	包括：

​		1. 单例模式

​		2. 工厂模式

​		3. 抽象工厂模式

​		4. 建造者模式

​		5. 原型模式





### 二、结构性模式：

#### 	定义：

​		向一个现有的对象添加新的功能，同时又不改变其结构。



#### 	包括：

1. 适配器模式
2. 桥接模式
3. 装饰模式
4. 组合模式
5. 代理模式
6. 外观模式
7. 享元模式



### 三、行为型模式：

#### 	定义：

​		这些设计模式特别关注对象之间的通信。



#### 	包括：

1. 模板方法模式
2. 命令模式
3. 迭代器模式
4. 观察者模式
5. 中介者模式
6. 备忘录模式
7. 解释器模式
8. 状态模式
9. 策略模式
10. 职责链模式
11. 访问者模式



​	

