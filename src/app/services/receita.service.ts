import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ReceitaI } from './../model/receita';


@Injectable({
    providedIn: 'root'
  })

export class ReceitaService {
    private receitas: Observable<ReceitaI[]>;
    private receitaCollection: AngularFirestoreCollection<ReceitaI>;

    constructor (
        private afs: AngularFirestore
    ){
        this.receitaCollection = this.afs.collection<ReceitaI>('receitas');
        this.receitas = this.receitaCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return{id, ...data};
                })
            })
        )
    }

    getReceitas(): Observable<ReceitaI[]>{
        return this.receitas;
    }

    getReceita(id: string): Observable<ReceitaI>{
        return this.receitaCollection.doc<ReceitaI>(id).valueChanges().pipe(
            take(1),
            map(receita => {
                receita.id = id;
                return receita
            })
        )
    }
} 