export default {
    modules: {
        navigator: {
            strict: true,
            namespaced: true,
            state: {
                stack: []
            },
            mutations: {
                push(state, page) {
                    state.stack.push(page);
                },
                pop(state) {
                    if (state.stack.length > 1) {
                        state.stack.pop();
                    }
                }
            }
        },

        tabbar: {
            strict: true,
            namespaced: true,
            state: {
                index: 0
            },
            mutations: {
                set(state, index) {
                    state.index = index;
                }
            }
        }
    }
};