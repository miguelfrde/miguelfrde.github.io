---
layout: post
title: Coding with only eight characters
category: Code
tags: brainfuck binary
year: 2014
month: 1
day: 23
published: true
comments: true
---

Last night I decided to see what I could do with Brainfuck, which I had seen many times, but never coded. I came up with a simple program that receives a binary number as input (in ASCII characters, so 1 is 49 and 0 is 48) and prints the next one.

I [read](http://www.muppetlabs.com/~breadbox/bf/) a little bit about Brainfuck and its 8 commands and I realized that Brainfuck simulates a Turing Machine over a limited tape, by allowing to move a pointer through an array of 30000 bytes initialized to zero. Of course, it also adds operations like increasing and decreasing the byte where the data pointer is and a simple structure that repeats until the byte at the data pointer is zero.

I remembered a Turing Machine that I designed last semester during my Automata Theory course and decided to code it in Brainfuck. This is the Turing machine I'm talking about:

![Binary generator TM]({{ site.url }}/static/img/post_resources/binarytm.png)

This Turing Machine generates binary numbers. For example, if the tape has a 0 then, the next time the Turing Machine reaches q0 it will have 1, the next time 10, then 11, then 100 and so on.

Here is the Brainfuck program ([try it here!](http://copy.sh/brainfuck/)) that this simple Turing Machine inspired:

{% highlight brainfuck %}
->>,[>,<------------------------------------------------>]-<[-<]+<+[-<+]>-[>-]++[+++++++++++++++++++++++++++++++++++++++++++++++.>+]
{% endhighlight %}

But, hey that's a little bit hard to read! What does it do? Well, here's a brief explanation:

<script src="https://gist.github.com/miguelfrde/8573568.js"></script>

As I said before, this is the first program I've coded to learn a little bit about Brainfuck and have some fun. This may not be the best way to increase a binary number in Brainfuck and it's highly possible that there exists some shorter and prettier solution, which I may try to find another day. I really liked Brainfuck, it's a fun language!
