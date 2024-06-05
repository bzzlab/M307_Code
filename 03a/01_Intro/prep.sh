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

CLT="client"
SRV="."
DEST="../00_Demo"
# declare -a server=($(ls 0*_server.js))

case $1 in
0)
  createTargetDir "${DEST}/${CLT}"
  cp "${SRV}/package.json" "${DEST}/${SRV}"
  ;;
1)
  for file in index.html
  do
      removeSolution ${CLT}/${file} "${DEST}/${CLT}/${file}"
  done
  ;;
2)
  for file in index.js
  do
      removeSolution ${SRV}/${file} "${DEST}/${SRV}/${file}"
  done
  ;;
*)
  echo "Incorrect choice entered!"
  ;;
esac
