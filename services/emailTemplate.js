module.exports = ({emailFrom , downloadLink , size , expires})=> {
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Email</title>
    <style>
        button{
            background-color: rgb(17, 77, 242);
        }
        .button1{
                    text-decoration: none;
                    
                    padding: 10px;
        }  
       
    </style>
</head>
<body>
    <div>
        <h4>Hi there,</h4>
        <p>${emailFrom} has shared a file with you.</p>
        <p>${size} in total. Expires in ${expires}</p>
        <button >
            <a class="button1" href="${downloadLink}" style ="color:white;" >Download File</a>
        </button>
        <p>Thank you for using file sharing service.</p>
        <p>Good Luck!!</p>
    </div>

</body>
</html>`
}