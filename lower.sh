#!/bin/bash

for page in res/pages/*; do
  content=$(tr '[:upper:]' '[:lower:]' < $page)
  echo $content > $page
done;
