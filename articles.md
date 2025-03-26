---
layout: layouts/article.njk
title: Articles
---

{%- for article in collections.articles -%}
<article> <header>
    <h2>
      <a href="{{ article.url }}">
        {{- article.data.title -}}
      </a>
    </h2>
  </header>

  {%- if article.data.excerpt -%}
    <p>
      {{- article.data.excerpt -}}
    </p>
  {%- endif -%}
</article>
{%- endfor -%}
