<theinput>
    <div>
        <input type="text" name="title" value={text} onkeyup={keyup}>
        <i>{text}</i>
    </div>

    <script>
        import Store from '../store';

        this.on('update', function() {
            this.text = Store.getState().theinput;
        });

        this.keyup = (e) => {
            Store.dispatch({ type: 'TEXT_CHANGE', value: this.title.value });
        }
    </script>
</theinput>
