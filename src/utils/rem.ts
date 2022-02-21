/**
 * 设置rem
 * @export
 * @param {number} designWidth 设计稿的实际宽度值，需要根据实际设置
 * @param {number} maxWidth 制作稿的最大宽度值，需要根据实际设置
 */
export default function setRem(designWidth: number, maxWidth: number) {
  const doc = document;
  const win = window;
  const docEl = doc.documentElement;
  const remStyle = document.createElement("style");
  // const dpr = window.devicePixelRatio || 1;
  const dpr = 1;
  let tid: any;

  /**
   * 刷新
   */
  function refreshRem() {
    const width = docEl.getBoundingClientRect().width;
    // maxWidth = maxWidth || 1920;
    // if (width > maxWidth) {
    //   width = maxWidth;
    // }
    const rem = (width * 100 * dpr) / designWidth;
    remStyle.innerHTML = "html{font-size:" + rem + "px;}";
  }

  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(remStyle);
  } else {
    let wrap: any = doc.createElement("div");
    wrap.appendChild(remStyle);
    doc.write(wrap.innerHTML);
    wrap = null;
  }
  // 要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
  refreshRem();

  win.addEventListener(
    "resize",
    () => {
      clearTimeout(tid); // 防止执行两次
      tid = setTimeout(refreshRem, 300);
    },
    false
  );

  win.addEventListener(
    "pageshow",
    e => {
      if (e.persisted) {
        // 浏览器后退的时候重新计算
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
      }
    },
    false
  );

  if (doc.readyState === "complete") {
    doc.body.style.fontSize = "16px";
  } else {
    doc.addEventListener(
      "DOMContentLoaded",
      e => {
        doc.body.style.fontSize = "16px";
      },
      false
    );
  }
}
