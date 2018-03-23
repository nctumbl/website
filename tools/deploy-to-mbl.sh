#!/bin/bash

ssh mbl@140.113.208.152 -p 22022 "rm -r /usr/share/nginx/html/gatsby/*"
scp -P 22022 -r ./public/. mbl@140.113.208.152:/usr/share/nginx/html/gatsby/
