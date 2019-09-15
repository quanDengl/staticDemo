import Vue from 'vue';
import MessageBox from './messageBox';

export var messageBox = (function () {
    var defaults = {
        title: '',
        content: '',
        cancel: '',
        ok: '',
        handleCancel: null,
        handleOk: null
    };

    var MyComponent = Vue.extend(MessageBox);

    return function (opts) {
        for (var attr in opts) {
            defaults[attr] = opts[attr];
        }

        var vm = new MyComponent({  // MyComponent是一个构造函数 需要使用new关键字创建
            el: document.createElement('div'),
            data: {
                title: defaults.title,
                content: defaults.content,
                cancel: defaults.cancel,
                ok: defaults.ok
            },
            methods: {
                handleCancel() {
                    defaults.handleCancel && defaults.handleCancel.call(this);
                    document.body.removeChild(vm.$el);
                },
                handleOk() {
                    defaults.handleOk && defaults.handleOk.call(this);
                    document.body.removeChild(vm.$el);
                }
            }
        });

        document.body.appendChild(vm.$el);
    }
})();