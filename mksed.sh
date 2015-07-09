#!/bin/bash
# script to generate sedfile to fix dates in format Mon D, YYYY to YYYY-MM-D
# note then need to pad with zeros

idx=12
for month in Dec Nov Oct Sep Aug Jul Jun May Apr Mar Feb Jan ; do
    echo "s/$month \([0-9]\{1,2\}\), \([0-9]\{4\}\)/\2-$idx-\1/g"
    (( idx-- ))
done
