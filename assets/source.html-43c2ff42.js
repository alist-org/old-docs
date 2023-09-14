import{_ as o,r as l,o as i,c as r,b as a,e as s,a as e,f as t}from"./app-8967e7f1.js";const p={},c=t('<h1 id="从源码运行" tabindex="-1"><a class="header-anchor" href="#从源码运行" aria-hidden="true">#</a> 从源码运行</h1><div class="hint-container danger"><p class="hint-container-title">警告</p><p>此步骤仅适用于需要自行修改源代码的用户。 不明白的请跳过。</p></div><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> <strong>环境准备</strong></h2><p>首先，你需要一个有<code>git</code>，<code>nodejs</code>，<code>pnpm</code>，<code>golang&gt;=1.20</code>，<code>gcc</code>的环境</p><h2 id="构建前端" tabindex="-1"><a class="header-anchor" href="#构建前端" aria-hidden="true">#</a> <strong>构建前端</strong></h2><p>使用 <code>git clone --recurse-submodules https://github.com/alist-org/alist-web.git</code> 克隆前端 ，执行 <code>pnpm install &amp;&amp; pnpm build</code> 得到 dist 目录下的目标文件</p><h2 id="构建后端" tabindex="-1"><a class="header-anchor" href="#构建后端" aria-hidden="true">#</a> <strong>构建后端</strong></h2>',7),d={href:"https://github.com/alist-org/alist",target:"_blank",rel:"noopener noreferrer"},b=a("code",null,"dist",-1),v=a("code",null,"public",-1),u=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">appName</span><span class="token operator">=</span><span class="token string">&quot;alist&quot;</span>
<span class="token assign-left variable">builtAt</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&#39;%F %T %z&#39;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token assign-left variable">goVersion</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>go version <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/go version //&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">gitAuthor</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> show <span class="token parameter variable">-s</span> <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;format:%aN &lt;%ae&gt;&#39;</span> HEAD<span class="token variable">)</span></span>
<span class="token assign-left variable">gitCommit</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>format:<span class="token string">&quot;%h&quot;</span> <span class="token parameter variable">-1</span><span class="token variable">)</span></span>
<span class="token assign-left variable">version</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">git</span> describe <span class="token parameter variable">--long</span> <span class="token parameter variable">--tags</span> <span class="token parameter variable">--dirty</span> <span class="token parameter variable">--always</span><span class="token variable">)</span></span>
<span class="token assign-left variable">webVersion</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">wget</span> -qO- <span class="token parameter variable">-t1</span> <span class="token parameter variable">-T2</span> <span class="token string">&quot;https://api.github.com/repos/alist-org/alist-web/releases/latest&quot;</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;tag_name&quot;</span> <span class="token operator">|</span> <span class="token function">head</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token string">&#39;s/\\&quot;//g;s/,//g;s/ //g&#39;</span><span class="token variable">)</span></span>
<span class="token assign-left variable">ldflags</span><span class="token operator">=</span><span class="token string">&quot;\\
-w -s \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.BuiltAt=<span class="token variable">$builtAt</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GoVersion=<span class="token variable">$goVersion</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GitAuthor=<span class="token variable">$gitAuthor</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.GitCommit=<span class="token variable">$gitCommit</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.Version=<span class="token variable">$version</span>&#39; \\
-X &#39;github.com/alist-org/alist/v3/internal/conf.WebVersion=<span class="token variable">$webVersion</span>&#39; \\
&quot;</span>
go build <span class="token parameter variable">-ldflags</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$ldflags</span>&quot;</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k={class:"hint-container details"},g=a("summary",null,"你可能需要的编译教程视频",-1),m={href:"https://www.bilibili.com/video/BV1Xr4y1z723",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.bilibili.com/video/BV1GW4y1s742",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.yuque.com/anwenya/alist/glqlhu",target:"_blank",rel:"noopener noreferrer"};function _(w,q){const n=l("ExternalLinkIcon");return i(),r("div",null,[c,a("p",null,[s("克隆 "),a("a",d,[s("https://github.com/alist-org/alist"),e(n)]),s(" ，将上一步的 "),b,s(" 目录复制到项目下的 "),v,s(" 目录下，然后执行：")]),u,a("details",k,[g,a("p",null,[s("Windows版本："),a("strong",null,[a("a",m,[s("https://www.bilibili.com/video/BV1Xr4y1z723"),e(n)])]),s(" （虽然是V2版的，但是跟V3版本一样的..）")]),a("p",null,[s("Linux版本："),a("strong",null,[a("a",h,[s("https://www.bilibili.com/video/BV1GW4y1s742"),e(n)])])]),a("p",null,[s("番外编译文档："),a("strong",null,[a("a",f,[s("https://www.yuque.com/anwenya/alist/glqlhu"),e(n)])])])])])}const $=o(p,[["render",_],["__file","source.html.vue"]]);export{$ as default};
