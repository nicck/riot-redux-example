require('./page.tag')
require('./counter.tag')
require('./theinput.tag')
require('./basket.tag')

<root>
    [
        <a href="#/">root</a> |
        <a href="#/counter/123">counter</a> |
        <a href="#/input">input</a> |
        <a href="#/basket">basket</a>
    ]
    { JSON.stringify(state.route) }

    <hr>

    <page name="basket_add">
        ...progress...
    </page>

    <page name="basket_index">
        <basket></basket>
    </page>

    <page name="root_index">
    </page>

    <page name="counter_show">
        <counter></counter>
    </page>

    <page name="input_index">
        <theinput></theinput>
    </page>

    <script>
        import Store from '../store';

        this.on('mount', function () {
            const tag = this;
            this.unsubscribe = Store.subscribe(function () {
                tag.update({ store: Store });
            });
        });

        this.on('unmount', function () {
            this.unsubscribe();
        });

        this.on('update', function () {
            this.state = Store.getState();
        });
    </script>

    <style scoped>
        h3 { color: gray; }
    </style>
</root>
