"""Maakt van index.html + css + js één los HTML-bestand (handig om te mailen).
Gebruik:  python3 tools/bouw-enkel-bestand.py
Resultaat: dist/data-uitgifte-presentatie.html
"""
import pathlib, re
root = pathlib.Path(__file__).resolve().parent.parent
html = (root / "index.html").read_text(encoding="utf-8")

def css(m):
    return "<style>\n" + (root / m.group(1)).read_text(encoding="utf-8") + "\n</style>"
def js(m):
    return "<script>\n" + (root / m.group(1)).read_text(encoding="utf-8") + "\n</script>"

html = re.sub(r'<link rel="stylesheet" href="(css/[^"]+)">', css, html)
html = re.sub(r'<script src="(js/[^"]+)"></script>', js, html)
out = root / "dist" / "data-uitgifte-presentatie.html"
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding="utf-8")
print("Geschreven:", out)
