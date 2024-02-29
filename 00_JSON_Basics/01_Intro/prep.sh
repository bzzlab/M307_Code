#!/bin/bash
#
LIB='../../bin/prep-lib.sh'
if [ ! -f $LIB ]; then      #??
  echo $LIB does not exist! #??
  exit 2                    #??
fi                          #??
source $LIB
#----------------------------------------
if test $# -lt 1; then
  printf "%s\n" \
    "Error: Provide at least 1 argument:" \
    "Prep number n" \
    "Exit script."
  exit 1
fi

DEST="../00_Demo"
SRC="."
# declare -a server=($(ls 0*_server.js))

case $1 in
0)
  createTargetDir "${DEST}"
  for dir in '01' '02'; do
    createTargetDir "${DEST}/${dir}"
    cp ${SRC}/${dir}/lernender.json ${DEST}/${dir}/lernender.json
  done
  ;;
1)
  for dir in '01' '02'; do
    for file in 'index.html' 'fetchData.js'; do
      removeSolution ${SRC}/${dir}/${file} "${DEST}/${dir}/${file}"
    done
  done

  dir="02"
  file="showData.js"
  removeSolution ${SRC}/${dir}/${file} "${DEST}/${dir}/${file}"
  ;;
*)
  echo "Incorrect choice entered!"
  ;;
esac
