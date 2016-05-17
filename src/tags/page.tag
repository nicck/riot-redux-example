<page>
    <div if={route.name === opts.name}>
        <h3>{route.name}</h3>
        <yield/>
    </div>

    <script>
        import Store from '../store';

        this.on('update', function () {
            this.route = Store.getState().route;
        });
    </script>
</page>
