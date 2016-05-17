<counter>
    <div>
        <h1>
            <span>{theinput}</span>
            <tt if={updating} class={updating ? 'disabled' : ''}>?</tt>
            <tt if={!updating}>{value}</tt>
        </h1>
        <button onclick={dec}>-</button>
        <button onclick={inc} disabled={updating}>+</button>
    </div>

    <script>
        import Store from '../store';
        import { incAsync } from '../actions';

        this.on('update', function () {
            const state = Store.getState();

            this.theinput = state.theinput;
            this.value = state.counter.value;
            this.updating = state.counter.updating;
        });

        this.inc = (e) => {
            e.preventUpdate = true;
            Store.dispatch(incAsync());
        }

        this.dec = function (e) {
            e.preventUpdate = true;
            Store.dispatch({ type: 'DEC' });
        }
    </script>

    <style scoped>
        .disabled { color: gray; }
    </style>
</counter>
