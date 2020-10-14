<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta content="programátor, vývojář webových stránek, kodér" name="keywords">
    <meta content="Vytvářím webové stránky a aplikace." name="description">
    <link rel="stylesheet" href="../../css/core.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="../../favicon.png" type="image/x-icon">
    <title>Fill text generator</title>
</head>

<body>

    <main class="container">
        <h1>Dummy text generator</h1>
        <hr>
        <div>
            <div class="p-20">
                <label class="h5">Length of fake text (in characters)</label>
                <input type="number" id="length" class="d-inline-block mx-10" required value="500">

                <button id="lorem-submit" class="button bg-green white">Generate</button>
            </div>

            <div id="transform" class="hide p-20">
                <label class="h5">Transform text</label>
                <select id="operation" class="d-inline-block mx-10">
                    <option value="stripTags" selected>default</option>
                    <option value="toUpperCase">UPPERCASE</option>
                    <option value="toLowerCase">lowercase</option>
                    <option value="toCamelCase">camelCase</option>
                    <option value="toCapitalized">Capitalize</option>
                    <option value="reverseText">esrever</option>
                    <option value="toUnderScored">_underscore_</option>
                    <option value="toHyphenized">-hyphenize-</option>
                    <option value="truncate">truncate...</option>
                </select>

                <button id="transform-submit" class="bg-orange button white">Transform</button>
            </div>
        </div>

        <div id="fake-text" class="hide mb-30 p-20">
            <label>Your fake text (click to copy)</label>
            <div id="text" class="mt-15 bg-light-gray p-20 border-radius-medium hide"></div>
        </div>

        <div class="mt-30 p-20">
            <div id="transformed-label"></div>
            <div id="transformed-text" class="mt-15 bg-light-gray p-20 border-radius-medium hide"></div>
        </div>
    </main>

    <script src="js/script.js"></script>

</body>

</html>