const Layout = ({children}:any)=>{

return (
    <>
    <html lang="en">
    <head >
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>this page is from the layout </title>
        <link href="./output.css" rel="stylesheet"/>

    </head>
    <body class="bg-blue-100 p-10">
        <h1 class=" text-4xl font-bold text-center">HONO JS </h1>
        <div class="flex flex-row items-center justify-center m-10 ">
        {children}

        </div>
        
    </body>
    </html>
    </>
)

}

export default Layout