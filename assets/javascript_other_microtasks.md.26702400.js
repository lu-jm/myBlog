import{_ as s,c as n,o as a,d as l}from"./app.ee3476ba.js";const i=JSON.parse('{"title":"\u5FAE\u4EFB\u52A1","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F8B","slug":"\u4F8B","link":"#\u4F8B","children":[]}],"relativePath":"javascript/other/microtasks.md"}'),o={name:"javascript/other/microtasks.md"},p=l(`<h1 id="\u5FAE\u4EFB\u52A1" tabindex="-1">\u5FAE\u4EFB\u52A1 <a class="header-anchor" href="#\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a></h1><p>javascript\u672C\u8D28\u4E0A\u662F\u4E00\u95E8\u5355\u7EBF\u7A0B\u8BED\u8A00,\u4E3A\u4E86\u80FD\u591F\u6EE1\u8DB3\u591A\u7EBF\u7A0B\u9700\u6C42,js\u5F15\u5165\u4E86<code>setTimeout()</code>\u548C<code>setInterval()</code>,\u4E5F\u5C31\u662F\u5FAE\u4EFB\u52A1\u7684\u6982\u5FF5\u3002<br> js\u7A0B\u5E8F\u6267\u884C\u662F\u7531\u4E00\u4E2A\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u7EC4\u6210\u7684\uFF0C\u5728\u5176\u4E2D\u4E00\u4E2A\u5FAA\u73AF\u4E2D\uFF0Cjs\u4F1A\u5148\u6267\u884C\u4EFB\u52A1(\u5B8F\u4EFB\u52A1)\uFF0C\u518D\u6267\u884C\u5FAE\u4EFB\u52A1\u3002<br> \u5E38\u89C1\u7684\u5B8F\u4EFB\u52A1\u5305\u62EC\uFF1A<code>setTimeout()</code>\u3001<code>setInterval()</code>\u3001<code>setImmediate</code>\u3001<code>Ajax</code>\u3001<code>DOM\u4E8B\u4EF6</code><br> \u5E38\u89C1\u7684\u5FAE\u4EFB\u52A1\u5305\u62EC\uFF1A<code>process.nextTick</code>\u3001<code>MutationObserver</code>\u3001<code>Promise.then catch finally</code></p><h2 id="\u4F8B" tabindex="-1">\u4F8B <a class="header-anchor" href="#\u4F8B" aria-hidden="true">#</a></h2><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Task</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//\u540C\u6B65</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//\u5F02\u6B65\uFF0C\u5B8F\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#676E95;">//\u540C\u6B65\uFF0C\u5FAE\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;">//\u5F02\u6B65\uFF0C\u5B8F\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//\u5F02\u6B65\uFF0C\u5FAE\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">5</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">6</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span><span style="color:#676E95;">//\u540C\u6B65</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">Task</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 1 3 6 5 2 4</span></span>
<span class="line"></span></code></pre></div><p>\u4E0A\u9762\u4F8B\u5B50\u4EE3\u7801\u7684\u6267\u884C\u8BF4\u660E\uFF1A<br> 1\u3001console.log(1)\u662F\u540C\u6B65\u4EE3\u7801\u76F4\u63A5\u6267\u884C\uFF0C<code>\u8F93\u51FA1</code>\uFF1BsetTimeout\u662F\u5F02\u6B65\u4EE3\u7801\uFF0C\u653E\u5230\u6267\u884C\u961F\u5217\u4E2D\uFF1Bnew Promise\u662F\u540C\u6B65\u4EE3\u7801\uFF0C<code>\u8F93\u51FA3</code>\uFF0C\u5176\u4E2D\u7684setTimeout\u662F\u5F02\u6B65\u4EE3\u7801\uFF0C\u653E\u5230\u6267\u884C\u961F\u5217\uFF1Bthen\u662F\u5F02\u6B65\u4EE3\u7801\uFF0C\u653E\u8FDB\u4EFB\u52A1\u961F\u5217\uFF1Bconsole.log(6)\u662F\u540C\u6B65\u4EE3\u7801\uFF0C<code>\u8F93\u51FA6</code>\u3002<br> 2\u3001\u7ECF\u8FC7\u4E0A\u8FF0\u6267\u884C\uFF0C\u4EFB\u52A1\u961F\u5217\u4E2D\u8FD8\u6709\u5982\u4E0B\u4EFB\u52A1\uFF1A</p><div class="language-javascript"><button class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//\u5F02\u6B65\uFF0C\u5B8F\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#676E95;">//\u5F02\u6B65\uFF0C\u5B8F\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">4</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#676E95;">//\u5F02\u6B65\uFF0C\u5FAE\u4EFB\u52A1</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">5</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>\u5F02\u6B65\u5FAE\u4EFB\u52A1\u8981\u5148\u4E8E\u5F02\u6B65\u5B8F\u4EFB\u52A1\u6267\u884C\uFF0C\u63A5\u4E0B\u6765\u6267\u884Cthen\u51FD\u6570\uFF0C\u8F93\u51FA5\uFF1B\u7136\u540E\u987A\u5E8F\u6267\u884C\u4E24\u4E2A\u5F02\u6B65\u5B8F\u4EFB\u52A1\uFF0C\u5206\u522B<code>\u8F93\u51FA2\u30014</code>\u3002</p>`,7),e=[p];function c(t,r,F,y,D,A){return a(),n("div",null,e)}const d=s(o,[["render",c]]);export{i as __pageData,d as default};
