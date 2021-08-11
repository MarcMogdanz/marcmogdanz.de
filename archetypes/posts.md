---
title: "{{ replace .Name "-" " " | title }}"
description: Lorem ipsum
author: ["Marc"]
# aliases: ["/example"]
tags: ["lorem", "ipsum"]
draft: true
date: {{ .Date }}
metis: CHANGE_ME

cover:
  image: "https://picsum.photos/300/100"
  alt: "Lorem ipsum"
  caption: "Lorem ipsum"
  hidden: true # hide on single page, show on front page

ShowReadingTime: true
ShowPostNavLinks: true
ShowBreadCrumbs: false
ShowToc: true
TocOpen: false
DisableShare: true
ShowShareButtons: false
HideSummary: false
---

# {{ replace .Name "-" " " | title }}
