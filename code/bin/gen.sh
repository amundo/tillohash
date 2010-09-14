#!/bin/sh
echo Making language...
echo Making directories: texts, grammar, media, dictionary
mkdir texts grammar media dictionary
echo Making directories: css, js
mkdir js css
echo Getting latest jquery.js
wget http://code.jquery.com/jquery-1.4.2.js
mv jquery-1.4.2.js js/jquery.js
cp ~/.skel/html5/page index.html
