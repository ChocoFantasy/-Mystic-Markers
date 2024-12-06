import Navbar from "../component/Navbar";
import "../style.css";

function Forum() {
    return (
        <>
            <section id="banner">
                <Navbar />
            </section>
                        {/* 文章列表 */}
                        <div className="article-list">
                            {/* 第一個文章卡片 */}
                            <article className="article-card">
                                {/* 文章內容(不含間距+水平線) */}
                                <div className="article-content">
                                    {/* 作者區塊 + 更多選項 */}
                                    <div className="article-header">
                                        {/* 作者區 */}
                                        <div className="author-info">
                                            <img
                                                src="../images/Forum/模糊獵人.svg"
                                                alt=""
                                                className="author-avatar"
                                            />
                                            <span className="author-name">模糊獵人</span>
                                        </div>
                                        <button type="button" aria-label="更多選項">
                                            <svg
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="var(--Primary-Green)"
                                            >
                                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                            </svg>
                                        </button>
                                    </div>
                                    {/* 一欄兩列 */}
                                    {/* 文章+圖 */}
                                    <div className="article-Graphics-text">
                                        <div className="left">
                                            <h2 className="article-title">
                                                親身經歷！那晚在荒廢的工廠聽見奇怪的低語聲
                                            </h2>
                                            <p className="article-preview">
                                                第一次發文，想跟大家分享我上週在嘉義一間廢棄工廠探險的恐怖經歷...
                                            </p>
                                            {/* icon 列表 */}
                                            <div className="interaction-bar">
                                                <div className="interaction-item">
                                                    <a href="#">
                                                        <img src="../images/Forum/Forum_ghost.svg" alt="ghostLOGO" />
                                                    </a>
                                                    <span>1502</span>
                                                </div>
                                                <div className="interaction-item">
                                                    <a href="#">
                                                        <img src="../images/Forum/mynaui_message.svg" alt="messageLOGO" />
                                                    </a>
                                                    <span>465</span>
                                                </div>
                                                <div className="interaction-item">
                                                    <a href="#">
                                                        <img src="../images/Forum/Forum_label.svg" alt="labelLOGO" />
                                                    </a>
                                                    <span>600</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="right">
                                            <img
                                                src="../images/Forum/模糊獵人文章圖.svg"
                                                alt=""
                                                className="article-image"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </article>
                        </div>
        </>
    )
}

export default Forum