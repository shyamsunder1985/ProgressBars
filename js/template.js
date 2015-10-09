 <select value='{{selectedProgress}}'>
        <option selected disabled>Select a progress bar</option>
        {{#each progressbars :index}}
            <option value='{{index}}'>{{name}}</option>
        {{/each}}
    </select>

    {{#each amounts}}
        <button disabled='{{selectedProgress == null}}' on-click='adjust(this)'>{{this > 0 ? '+' : ''}}{{this}}</button>
    {{/each}}  

  {{#each progressbars}} 
        <p>Slide/ click to adjust this progress bar.</p>
        {{#if value < 100}}
            <div class="progress-bar-fill" style="width: {{(setValue(value))/2}}%">
                <span class="progress-label">{{setValue(value)}}%</span>
            </div>
        {{/if}}

        {{#if value>=100}}
            <div class="progress-bar-fill-red" style="width: 50%">
                <span class="progress-label">{{value}}%</span>
            </div>
        {{/if}}
    {{/each}}