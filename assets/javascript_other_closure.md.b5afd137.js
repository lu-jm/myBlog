import{_ as s,c as n,o as a,d as l}from"./app.5ea75e8c.js";const C=JSON.parse('{"title":"\u95ED\u5305","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F5C\u7528\u57DF","slug":"\u4F5C\u7528\u57DF","link":"#\u4F5C\u7528\u57DF","children":[]},{"level":2,"title":"return","slug":"return","link":"#return","children":[]},{"level":2,"title":"\u5B9E\u7528\u7684\u95ED\u5305","slug":"\u5B9E\u7528\u7684\u95ED\u5305","link":"#\u5B9E\u7528\u7684\u95ED\u5305","children":[]}],"relativePath":"javascript/other/closure.md"}'),p={name:"javascript/other/closure.md"},o=l(`<h1 id="\u95ED\u5305" tabindex="-1">\u95ED\u5305 <a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a></h1><p>js\u4E2D\u95ED\u5305\u4F1A\u968F\u51FD\u6570\u7684\u521B\u5EFA\u5F62\u6210\uFF0C\u5185\u90E8\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF\u79F0\u4E4B\u4E3A\u95ED\u5305</p><h2 id="\u4F5C\u7528\u57DF" tabindex="-1">\u4F5C\u7528\u57DF <a class="header-anchor" href="#\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h2><p>\u95ED\u5305\u4E3B\u8981\u662F\u4F5C\u7528\u57DF\u95EE\u9898\uFF0C\u4E0E\u662F\u5426return\u65E0\u5173\uFF0C\u4F46\u662F\u5728\u5B9E\u9645\u4F7F\u7528\u4E2D\u5F80\u5F80\u9700\u8981\u4F7F\u7528<code>return</code>\uFF0C\u5982\u4E0B\u4F8B\u5B50\u5C31\u662F\u4E00\u4E2A\u95ED\u5305\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">  </span><span style="color:#676E95;">//\u5916\u90E8\u51FD\u6570\u53D8\u91CF</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">show</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;">//\u5185\u90E8\u51FD\u6570\uFF0C\u4E00\u4E2A\u95ED\u5305</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//\u8BBF\u95EE\u5916\u90E8\u53D8\u91CF</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">show</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="return" tabindex="-1">return <a class="header-anchor" href="#return" aria-hidden="true">#</a></h2><p>\u4F7F\u7528return\u8FD4\u56DE\u95ED\u5305\u51FD\u6570\uFF0C\u4E0B\u9762\u4F8B\u5B50\u6267\u884Cinit()\u51FD\u6570\u540E\uFF0C\u53D8\u91CFa\u8FD8\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u5E76\u672A\u9500\u6BC1\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> __init </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#82AAFF;">__init</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;">// 1</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B9E\u7528\u7684\u95ED\u5305" tabindex="-1">\u5B9E\u7528\u7684\u95ED\u5305 <a class="header-anchor" href="#\u5B9E\u7528\u7684\u95ED\u5305" aria-hidden="true">#</a></h2><p>\u95ED\u5305\u7C7B\u4F3C\u4E8E\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\uFF0C\u4F8B\u5982java\u4E2D\u5B9E\u4F8B\u5316\u4E00\u4E2A\u7C7B\uFF0C\u76F8\u5F53\u4E8E\u91CD\u65B0\u5F00\u8F9F\u4E00\u5757\u5185\u5B58\uFF0C\u53EF\u4EE5\u5BF9\u8FD9\u4E2A\u5B9E\u4F8B\u7684\u53D8\u91CF\u8FDB\u884C\u64CD\u4F5C\uFF0C\u8FD8\u53EF\u5B9A\u4E49\u79C1\u6709\u5316\u53D8\u91CF\uFF0C\u4E0D\u8FC7javascript\u6CA1\u6709\u539F\u751F\u652F\u6301\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6A21\u62DF\u65B9\u6CD5\u6765\u5B9E\u73B0\u3002</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Count</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;">//\u79C1\u6709\u5316\u53D8\u91CF</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">changeNum</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">num</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">increment</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">changeNum</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">decrement</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#82AAFF;">changeNum</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">value</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">num</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> count </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Count</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(count</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">value</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">//0</span></span>
<span class="line"><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">increment</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(count</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">value</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;">//1</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function c(t,r,F,y,D,A){return a(),n("div",null,e)}const u=s(p,[["render",c]]);export{C as __pageData,u as default};
