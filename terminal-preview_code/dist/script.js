const terminalContent = document.getElementById("terminal-content");
const tabs = document.querySelectorAll(".terminal-tab");

const htmlContent = `
          <div class="about-me-container">
    <div class="about-me-left">
        <div class="backDivBlank"></div>
        <div class="profile-image-wrapper">
          <img src="https://picsum.photos/seed/boy/200/200" alt="Profile Image of a Boy" class="profile-image">

        </div>
        <div class="social-icons">
            <a href="#" class="social-icon">𝕏</a>
            <a href="#" class="social-icon">in</a>
            <a href="#" class="social-icon">ig</a>
        </div>
    </div>
    <div class="about-me-right">
        <h1 class="about-me-title">About Me.</h1>
        <p class="about-me-description">
            I'm a passionate developer and a third-year undergraduate engineering student, constantly experimenting with code and learning new technologies. My approach to development is built around three core ideas:
        </p>
        <div class="tree-subject">
            <div class="tree-subject-item">
                I love breaking down complex problems and crafting clean, efficient code. Think of me as a problem solver.
            </div>
            <div class="tree-subject-item">
                I organize ideas into functional, user-friendly solutions, whether it's building a web app or optimizing an existing system. You can call me a solution architect in training.
            </div>
            <div class="tree-subject-item">
                I'm always eager to explore new tools, frameworks, and methodologies to refine my craft and stay ahead in the tech world.
            </div>
        </div>
    </div>
</div>`;
const htmlContent2 = `
            <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"about-me-container"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"about-me-left"</span><span class="tag">&gt;</span>
                    <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"backDivBlank"</span><span class="tag">&gt;&lt;/div&gt;</span>
                    <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"profile-image-wrapper"</span><span class="tag">&gt;</span>
                        <span class="tag">&lt;img</span> <span class="attribute">src</span>=<span class="string">"./Assets/images/1.png"</span> <span class="attribute">alt</span>=<span class="string">""</span> <span class="attribute">class</span>=<span class="string">"profile-image"</span><span class="tag">&gt;</span>
                    <span class="tag">&lt;/div&gt;</span>
                    <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"social-icons"</span><span class="tag">&gt;</span>
                        <span class="tag">&lt;a</span> <span class="attribute">href</span>=<span class="string">"#"</span> <span class="attribute">class</span>=<span class="string">"social-icon"</span><span class="tag">&gt;</span>Github Icon Here<span class="tag">&lt;/a&gt;</span>
                        <span class="tag">&lt;a</span> <span class="attribute">href</span>=<span class="string">"#"</span> <span class="attribute">class</span>=<span class="string">"social-icon"</span><span class="tag">&gt;</span>Linkedin Icon Here<span class="tag">&lt;/a&gt;</span>
                        <span class="tag">&lt;a</span> <span class="attribute">href</span>=<span class="string">"#"</span> <span class="attribute">class</span>=<span class="string">"social-icon"</span><span class="tag">&gt;</span>Codepen Icon Here<span class="tag">&lt;/a&gt;</span>
                    <span class="tag">&lt;/div&gt;</span>
                <span class="tag">&lt;/div&gt;</span>
                <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"about-me-right"</span><span class="tag">&gt;</span>
                    <span class="tag">&lt;h1</span> <span class="attribute">class</span>=<span class="string">"about-me-title"</span><span class="tag">&gt;</span>About Me.<span class="tag">&lt;/h1&gt;</span>
                    <span class="tag">&lt;p</span> <span class="attribute">class</span>=<span class="string">"about-me-description"</span><span class="tag">&gt;</span>
                        I'm a passionate developer and a third-year undergraduate engineering student, constantly experimenting with code and learning new technologies. My approach to development is built around three core ideas:
                    <span class="tag">&lt;/p&gt;</span>
                    <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"tree-subject"</span><span class="tag">&gt;</span>
                        <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"tree-subject-item"</span><span class="tag">&gt;</span>
                            I love breaking down complex problems and crafting clean, efficient code. Think of me as a problem solver.
                        <span class="tag">&lt;/div&gt;</span>
                        <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"tree-subject-item"</span><span class="tag">&gt;</span>
                            I organize ideas into functional, user-friendly solutions, whether it's building a web app or optimizing an existing system. You can call me a solution architect in training.
                        <span class="tag">&lt;/div&gt;</span>
                        <span class="tag">&lt;div</span> <span class="attribute">class</span>=<span class="string">"tree-subject-item"</span><span class="tag">&gt;</span>
                            I'm always eager to explore new tools, frameworks, and methodologies to refine my craft and stay ahead in the tech world.
                        <span class="tag">&lt;/div&gt;</span>
                    <span class="tag">&lt;/div&gt;</span>
                <span class="tag">&lt;/div&gt;</span>
            <span class="tag">&lt;/div&gt;</span>`;
const cssContent = `
          <span class="selector">.about-me-container</span> <span class="punctuation">{</span>
              <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
              <span class="property">max-width</span><span class="punctuation">:</span> <span class="value">1200px</span><span class="punctuation">;</span>
              <span class="property">margin</span><span class="punctuation">:</span> <span class="value">0 auto</span><span class="punctuation">;</span>
              <span class="property">padding</span><span class="punctuation">:</span> <span class="value">2rem</span><span class="punctuation">;</span>
              <span class="property">background-color</span><span class="punctuation">:</span> <span class="value">#f8f9fa</span><span class="punctuation">;</span>
              <span class="property">border-radius</span><span class="punctuation">:</span> <span class="value">10px</span><span class="punctuation">;</span>
              <span class="property">box-shadow</span><span class="punctuation">:</span> <span class="value">0 4px 6px rgba(0, 0, 0, 0.1)</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>

          <span class="selector">.about-me-left</span> <span class="punctuation">{</span>
              <span class="property">flex</span><span class="punctuation">:</span> <span class="value">1</span><span class="punctuation">;</span>
              <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
              <span class="property">flex-direction</span><span class="punctuation">:</span> <span class="value">column</span><span class="punctuation">;</span>
              <span class="property">align-items</span><span class="punctuation">:</span> <span class="value">center</span><span class="punctuation">;</span>
              <span class="property">padding-right</span><span class="punctuation">:</span> <span class="value">2rem</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>

          <span class="selector">.profile-image-wrapper</span> <span class="punctuation">{</span>
              <span class="property">width</span><span class="punctuation">:</span> <span class="value">200px</span><span class="punctuation">;</span>
              <span class="property">height</span><span class="punctuation">:</span> <span class="value">200px</span><span class="punctuation">;</span>
              <span class="property">border-radius</span><span class="punctuation">:</span> <span class="value">50%</span><span class="punctuation">;</span>
              <span class="property">overflow</span><span class="punctuation">:</span> <span class="value">hidden</span><span class="punctuation">;</span>
              <span class="property">margin-bottom</span><span class="punctuation">:</span> <span class="value">1rem</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>

          <span class="selector">.profile-image</span> <span class="punctuation">{</span>
              <span class="property">width</span><span class="punctuation">:</span> <span class="value">100%</span><span class="punctuation">;</span>
              <span class="property">height</span><span class="punctuation">:</span> <span class="value">100%</span><span class="punctuation">;</span>
              <span class="property">object-fit</span><span class="punctuation">:</span> <span class="value">cover</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>

          <span class="selector">.social-icons</span> <span class="punctuation">{</span>
              <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
              <span class="property">gap</span><span class="punctuation">:</span> <span class="value">1rem</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>

          <span class="selector">.social-icon</span> <span class="punctuation">{</span>
              <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">1.5rem</span><span class="punctuation">;</span>
              <span class="property">color</span><span class="punctuation">:</span> <span class="value">#333</span><span class="punctuation">;</span>
              <span class="property">text-decoration</span><span class="punctuation">:</span> <span class="value">none</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>

          <span class="selector">.about-me-right</span> <span class="punctuation">{</span>
              <span class="property">flex</span><span class="punctuation">:</span> <span class="value">2</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>

          <span class="selector">.about-me-title</span> <span class="punctuation">{</span>
              <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">2.5rem</span><span class="punctuation">;</span>
              <span class="property">margin-bottom</span><span class="punctuation">:</span> <span class="value">1rem</span><span class="punctuation">;</span>
              <span class="property">color</span><span class="punctuation">:</span> <span class="value">#333</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>

          <span class="selector">.about-me-description</span> <span class="punctuation">{</span>
              <span class="property">font-size</span><span class="punctuation">:</span> <span class="value">1rem</span><span class="punctuation">;</span>
              <span class="property">line-height</span><span class="punctuation">:</span> <span class="value">1.6</span><span class="punctuation">;</span>
              <span class="property">margin-bottom</span><span class="punctuation">:</span> <span class="value">1.5rem</span><span class="punctuation">;</span>
              <span class="property">color</span><span class="punctuation">:</span> <span class="value">#555</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>

          <span class="selector">.tree-subject</span> <span class="punctuation">{</span>
              <span class="property">display</span><span class="punctuation">:</span> <span class="value">flex</span><span class="punctuation">;</span>
              <span class="property">flex-direction</span><span class="punctuation">:</span> <span class="value">column</span><span class="punctuation">;</span>
              <span class="property">gap</span><span class="punctuation">:</span> <span class="value">1rem</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>

          <span class="selector">.tree-subject-item</span> <span class="punctuation">{</span>
              <span class="property">background-color</span><span class="punctuation">:</span> <span class="value">#fff</span><span class="punctuation">;</span>
              <span class="property">padding</span><span class="punctuation">:</span> <span class="value">1rem</span><span class="punctuation">;</span>
              <span class="property">border-radius</span><span class="punctuation">:</span> <span class="value">5px</span><span class="punctuation">;</span>
              <span class="property">box-shadow</span><span class="punctuation">:</span> <span class="value">0 2px 4px rgba(0, 0, 0, 0.05)</span><span class="punctuation">;</span>
          <span class="punctuation">}</span>`;
function showTab(tabName) {
  tabs.forEach((tab) => tab.classList.remove("active"));
  document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");

  switch (tabName) {
    case "preview":
      terminalContent.innerHTML = htmlContent;
      break;
    case "html":
      terminalContent.innerHTML = `<pre><code>${htmlContent2}</code></pre>`;
      break;
    case "css":
      terminalContent.innerHTML = `<pre><code>${cssContent}</code></pre>`;
      break;
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    showTab(tab.getAttribute("data-tab"));
  });
});

// Show preview tab by default
showTab("preview");