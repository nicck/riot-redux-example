    npm install

    watchify -v --debug -t [ riotify --type babel ] -t babelify -p [ minifyify --output dest/bundle.map --base dest/ ] src/application.js -o dest/bundle.js
    
    # browserify -t [ riotify --type babel ] -t babelify -p [ minifyify --no-map ] src/application.js -o dest/bundle.js

    brew install devd
    devd .
    open 'http://devd.io:8000/#/'
