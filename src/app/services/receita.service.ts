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

    constructor(private afs: AngularFirestore) {
        this.receitaCollection = this.afs.collection<ReceitaI>('receitas');
        this.receitas = this.receitaCollection.snapshotChanges().pipe(map(
            actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                })
            })
        )
    }

    getReceitas() {
        return this.receitas;
    }
    getReceita(id: string) {
        return this.receitaCollection.doc<ReceitaI>(id).valueChanges();
    }
    update(receita: ReceitaI, id: string) {
        return this.receitaCollection.doc(id).update(receita);
    }
    remove(id: string) {
        return this.receitaCollection.doc(id).delete();
    }
    addReceita(receita:ReceitaI) {
        return this.receitaCollection.add(receita);
    }
} 