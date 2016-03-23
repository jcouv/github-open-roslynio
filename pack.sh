#!/bin/bash

echo Distributing the extension...
zip -r ~/github-open-roslynio.zip . -i 'Assets/*' -i 'manifest.json' -i 'src/*' -i 'README.md' -i 'LICENSE'

