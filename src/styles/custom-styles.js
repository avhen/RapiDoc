import { css } from 'lit';

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

export default css`
    .tree {
        font-size: var(--font-size-small);
        text-align: left;
        direction: ltr;
        line-height: calc(var(--font-size-small) + 6px);
        background-color: #212f3c;
        color: #f7f9f9;
        padding: 10px;
    }
    .tree .tr:hover {
        background-color: #2e4053 !important;
    }
    .tr {
        margin-top: 5px;
    }
    .key-descr {
        color: #d7dbdd;
    }
    .keyDesc > .m-markdown-small {
        font-size: 15px !important;
        margin-bottom: 10px;
    }
    .open-bracket,
    .close-bracket {
        color: #f7f9f9 !important;
    }
    .open-bracket:hover {
        color: #d7dbdd !important;
        background-color: #212f3c;
        border: 1px solid var(--border-color);
    }
    .open-bracket.expanded:hover ~ .close-bracket {
        color: #d7dbdd;
    }
    .json-tree {
        position: relative;
        font-family: var(--font-mono);
        font-size: var(--font-size-small);
        display: inline-block;
        overflow: hidden;
        word-break: break-all;
        flex: 1;
        line-height: calc(var(--font-size-small) + 6px);
        direction: ltr;
        text-align: left;
        background-color: #212f3c;
        color: #f7f9f9;
        padding: 10px;
        line-height: calc(var(--font-size-small) + 6px);
    }
    .string,
    .stri {
        color: var(--orange);
    }
    .boolean,
    .bool {
        color: var(--brown);
    }
    .m-table {
        background: #f7f7f7;
        border-spacing: 0px;
        border-collapse: separate;
        border: 1px solid #e2e2e2;
        border-radius: var(--border-radius);
        margin: 0px;
        max-width: 100%;
        direction: ltr;
        border-radius: 5px;
        padding: 10px;
    }
    .param-name {
        font-weight: bold;
    }
    .request-body-container {
        margin-top: 30px;
    }
    .nav-bar-tag {
        border-bottom: solid 1px var(--fg3);
    }
    .textarea {
        min-height: 400px;
        color: #7cbfec;
    }
`;
