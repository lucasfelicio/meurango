import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReceitaI } from './../model/receita';

@Injectable({
  providedIn: 'root'
})

export class ReceitasService {
  private receitasCollection: AngularFirestoreCollection<ReceitaI>;
  private receitas: Observable<ReceitaI[]>;

  constructor(private db: AngularFirestore) {
    this.receitasCollection = db.collection<ReceitaI>('receitas');
    this.receitas = this.receitasCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }
    ));
  }
  getReceitas() {
    return this.receitas;
  }

  getReceita(id: string) {
    return this.receitasCollection.doc<ReceitaI>(id).valueChanges();
  }

  update(receita: ReceitaI, id: string) {
    return this.receitasCollection.doc(id).update(receita);
  }

  remove(id: string) {
    return this.receitasCollection.doc(id).delete();
  }

  addReceita(receita: ReceitaI) {
    return this.receitasCollection.add(receita);
  }
}