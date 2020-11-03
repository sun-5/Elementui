# base-learn

### 父子组件中的通信 
#### props / $emit
- ⼦组件中通过定义props接收⽗组件中通过v-bind绑定的数据
- ⽗组件中通过监听⼦组件中$emit的⾃定义事件接收数据
#### $parent / children
- ⼦组件中通过this.$parent这个对象获取⽗组件中的数据
- ⽗组件中通过this.$children这个数组获取⼦组件中的数据
#### $ref
- ⽗组件中定义⼦组件中的ref属性后，通过this.$refs.定义的属性名获取⼦组件数据