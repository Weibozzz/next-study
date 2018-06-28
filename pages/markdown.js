import Layout from '../components/MyLayout.js'
import {withRouter} from 'next/router'
import Markdown from 'react-markdown'
import Highlight from 'react-highlight'
import marked from 'marked'
export default withRouter((props) => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <div className="markdown">
      <Highlight innerHTML>
        {marked('This is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\n# git命令\n## 初始化\n设置用户名，邮箱\n```bash\ngit config --global user.name "Author Name"\ngit config --global user.email "Author Email"\n```\n查看邮箱用户名等选项\n```bash\ngitc onfig --list\n```\n\n初始化一个Git仓库，使用`git init`命令。\n第一步，使用命令`git add .`,添加全部 ，注意，可反复多次使用，添加多个文件；\n第二步，使用命令`git commit -m "提交的注释"`，完成。\n\n\nAnd here\'s the content.')}
      </Highlight>
      <Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

# git命令
## 初始化
设置用户名，邮箱
\`\`\`bash
git config --global user.name "Author Name"
git config --global user.email "Author Email"
\`\`\`
查看邮箱用户名等选项
\`\`\`bash
gitc onfig --list
\`\`\`

初始化一个Git仓库，使用\`git init\`命令。
第一步，使用命令\`git add .\`,添加全部 ，注意，可反复多次使用，添加多个文件；
第二步，使用命令\`git commit -m "提交的注释"\`，完成。


And here's the content.
     `}/>
    </div>
    <style jsx global>{`
     .markdown {
       font-family: 'Arial';
     }

     .markdown a {
       text-decoration: none;
       color: blue;
     }

     .markdown a:hover {
       opacity: 0.6;
     }

     .markdown h3 {
       margin: 0;
       padding: 0;
       text-transform: uppercase;
     }
  `}</style>
  </Layout>
))