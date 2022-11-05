<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;

class CategoriesGetController extends Controller
{
    function getCategories(Request $req){
        $categories = new Categories();
        $categorie = $categories->where('previous','0')->orderBy('description')->get();
        return $categorie;
    }

    function getCategoriesId(Request $categorieNumber){
        $categories = new Categories();
        $categorie = $categories->where('previous',$categorieNumber['id'])->orderBy('description')->get();
        return $categorie;
    }
}
