<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoriesController extends Controller
{
    function index (Request $req){
        $response = $this->downloadCategories();
        Categories::truncate();
        foreach($response as $cat){
            $previous = count($cat['path_from_root'])>1 ? $cat['path_from_root'][count($cat['path_from_root'])-2]['id'] : 0;
            $next = count($cat['children_categories'])>0 ? $cat['children_categories'][0]['id'] : 0;
            $new_categorie = [
                 'code' => $cat['id'],
                 'description' => $cat['name'],
                 'previous' => $previous,
                 'next' => $next
            ];
            $categorie = new Categories($new_categorie);
            $categorie->save();
        }
        return count($response);
    }

    function downloadCategories(){
        $down = file_get_contents('https://api.mercadolibre.com/sites/MLB/categories/all');
        Storage::disk('local')->put('mlbtree.gz', $down);
        $file_name = storage_path().'/app/'.'mlbtree.gz';
        $buffer_size = 4096;
        $out_file_name = storage_path().'/app/'.'mlbtree';
        $file = gzopen($file_name, 'rb');
        $out_file = fopen($out_file_name, 'wb');
        while(!gzeof($file)) {
            fwrite($out_file, gzread($file, $buffer_size));
        }
        fclose($out_file);
        gzclose($file);
        $json = json_decode(file_get_contents($out_file_name), true);
        Storage::disk('local')->delete('mlbtree.gz');
        Storage::disk('local')->delete('mlbtree');
        return $json;
    }

}
