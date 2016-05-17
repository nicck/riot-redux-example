<basket>
    <div>
        basket: { loading ? '?' : value }
    </div>

    <script>
        import Store from '../store';

        this.on('update', function () {
            const state = Store.getState();

            this.value = state.basket.value;
            this.loading = state.basket.loading;
        });
    </script>
</basket>
