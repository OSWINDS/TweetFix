<?php
/**
 * Created by PhpStorm.
 * User: platico
 * Date: 10/6/16
 * Time: 10:06 PM
 */

/**
 * @param $filename  path of the filename
 * @param $delimiter that breaks each line into tokens
 */
function generate_table($filename, $delimiter){

    $filehandler = fopen($filename, "r");
    if ($filehandler) {
        echo"<table class='table table-hover mt'>
                    <thead>
                        <tr>
                          <th>#</th>
                          <th>Word</th>
                          <th>Frequency</th>
                        </tr>
                    </thead>
                    <tbody>
            ";
        $counter = 1;
        while (($line = fgets($filehandler)) !== false) {
            $tokens = explode($delimiter,$line);  //breaks the line into tokens based on a given delimiter
            $word = $tokens[0];     //words are placed before the delimiter
            $frequency = $tokens[1];    //frequencies are placed after the delimiter
            echo "<tr>
                        <td>$counter</td>
                        <td>$word</td>
                        <td>$frequency</td>
                </tr>
            ";
            $counter++;
        }
        fclose($filehandler);
        echo "    </tbody>
                </table>
        ";
    } else {
        print "<p>Error Loading the table (Cause: Missing file)</p>";
    }




}


