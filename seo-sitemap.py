from pathlib import Path
from urllib.parse import urlsplit
import json, xml.etree.ElementTree as ET
root=Path(__file__).resolve().parent
url=input("公開URL（例 https://example.com/sansuu_v4/）: ").strip().rstrip('/')+'/'
u=urlsplit(url)
if u.scheme not in ('https','http') or not u.netloc or u.query or u.fragment or u.hostname in ('localhost','127.0.0.1'):
 raise SystemExit('公開URLを確認してください')
ns='http://www.sitemaps.org/schemas/sitemap/0.9'; ET.register_namespace('',ns)
tree=ET.Element('{'+ns+'}urlset')
for p in json.loads((root/'seo-pages.json').read_text()):
 if not (root/p).is_file(): raise SystemExit('ファイルがありません: '+p)
 e=ET.SubElement(tree,'{'+ns+'}url');ET.SubElement(e,'{'+ns+'}loc').text=url+p
ET.ElementTree(tree).write(root/'sitemap.xml',encoding='utf-8',xml_declaration=True)
(root/'robots.txt').write_text('User-agent: *\nAllow: /\nSitemap: '+url+'sitemap.xml\n')
print('sitemap.xml を生成しました。robots.txt はドメイン直下で有効です。')
