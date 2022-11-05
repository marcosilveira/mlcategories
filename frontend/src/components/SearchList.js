import React, { Component } from 'react';
import SearchListItem from './SearchListItem';
import SearchListItemArrow from './SearchListItemArrow';
import SearchListTitle from './SearchListTitle';

function SearchList() {
    return (
        <div className="syi-category-container">
            {/* <div class="syi-category-searchable">
                <div class="sc-sov-carrousel">
                    <div class="sc-sov-carrousel-element sc-sov-carrousel-central null">
                        <div id="searchableOptionValuesContainer" class="searchable-option-values-container searchable-option-values-container--no-filter-height">
                            <SearchListTitle name="Qual das opções o descreve?" />
                            <div class="sc-ui-option-values">
                                <ul class="andes-list andes-list--default andes-list--selectable" aria-labelaria-labelledby >
                                    <li class="andes-list__item sc-ui-option-value--with-rigth-icon sc-ui-option-value--secondary-inline andes-list__item--size-medium andes-list__item--selected">
                                        <SearchListItem name="Acessórios para Veículos" />
                                        <SearchListItemArrow/>
                                    </li>
                                    <li class="andes-list__item sc-ui-option-value--with-rigth-icon sc-ui-option-value--secondary-inline andes-list__item--size-medium andes-list__item--selected">
                                        <SearchListItem name="Agro" />
                                        <SearchListItemArrow/>
                                    </li>
                                    <li class="andes-list__item sc-ui-option-value--with-rigth-icon sc-ui-option-value--secondary-inline andes-list__item--size-medium andes-list__item--selected">
                                        <SearchListItem name="Alimentos e Bebidas" />
                                        <SearchListItemArrow/>
                                    </li>
                                    <li class="andes-list__item sc-ui-option-value--with-rigth-icon sc-ui-option-value--secondary-inline andes-list__item--size-medium andes-list__item--selected">
                                        <SearchListItem name="Animais" />
                                        <SearchListItemArrow/>
                                    </li>
                                    <li class="andes-list__item sc-ui-option-value--with-rigth-icon sc-ui-option-value--secondary-inline andes-list__item--size-medium andes-list__item--selected">
                                        <SearchListItem name="Antiguidade e coleções" />
                                        <SearchListItemArrow/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default SearchList;