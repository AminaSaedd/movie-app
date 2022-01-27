import React from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import Loading from './Loading';

export default function GenericList(props:genericListProps) {
 if(!props.list){
     if(props.loadingUI){
         return props.loadingUI
     }
     return <Loading/>
    }
     else if(props.list.length===0) {
       if(props.emptyListUI){
           return props.emptyListUI;
       }
       return<>There are No elements to display </>
     }
     else{
            return props.children;
     }
 }







interface genericListProps{
    list:any;
    loadingUI?:ReactElement;
    emptyListUI? :ReactElement;
    children:ReactElement;
}