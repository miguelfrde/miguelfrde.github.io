---
layout: page
title: About me
---

Section currently under development.

## Archive
<ul class="list-posts">
	{% for post in site.posts %}
		<li>{{post.date | date: "%b %d, %Y"}}: <a href="{{post.url}}">{{post.title}}</a></li>
	{% endfor %}
</ul>