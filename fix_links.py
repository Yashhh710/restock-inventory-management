import os

file_path = r'c:\Users\tamba\Downloads\wetransfer_screwfast-uk-3_2026-07-31_1219\screwfast.uk 3\home\index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace _astro paths
content = content.replace('\"_astro/', '\"../_astro/')
content = content.replace('\'_astro/', '\'../_astro/')

# Replace favicon
content = content.replace('\"favicon.ico\"', '\"../favicon.ico\"')

# Replace absolute paths for manifest and sitemap
content = content.replace('\"/manifest.json\"', '\"../manifest.json\"')
content = content.replace('\"/sitemap-index.xml\"', '\"../sitemap-index.xml\"')

# Also replace href="/" with href="../index.html"
content = content.replace('href=\"/\"', 'href=\"../index.html\"')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print('Replaced paths successfully')
