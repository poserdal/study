#!/usr/bin/env python3
"""Rebuild the site: merges weeks/*.json into site.template.html -> index.html
Usage: python3 build.py   (run from the folder that holds build.py, weeks/, site.template.html)"""
import json, glob, os
here = os.path.dirname(os.path.abspath(__file__))
weeks = []
for f in sorted(glob.glob(os.path.join(here, 'weeks', 'w*.json'))):
    weeks += json.load(open(f, encoding='utf-8'))
assert [w['n'] for w in weeks] == list(range(1, 53)), "weeks out of order or missing"
data = json.dumps(weeks, ensure_ascii=False).replace('</', '<\\/')
tpl = open(os.path.join(here, 'site.template.html'), encoding='utf-8').read()
out = tpl.replace('/*DATA*/', data)
open(os.path.join(here, 'index.html'), 'w', encoding='utf-8').write(out)
print("built index.html:", len(out)//1024, "KB,", len(weeks), "weeks")
