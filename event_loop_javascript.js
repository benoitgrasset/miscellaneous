function processPromises() {
    console.log('7. Début fonction secondaire');
    
    try {
        Promise.resolve().then(() => {
            console.log('8. Promise 2 résolue');
            throw new Error('Erreur simulée');
        }).catch((error) => {
            console.log('9. Erreur capturée dans Promise:', error.message);
        });
        
        setTimeout(() => {
            console.log('10. Timeout 3 (5ms)');
        }, 5);
        
    } catch (error) {
        console.log('11. Erreur capturée dans try/catch:', error.message);
    }
    
    console.log('12. Fin fonction secondaire');
}


function executeTasks() {
    console.log('1. Début fonction principale');
    
    setTimeout(() => {
        console.log('2. Timeout 1 (0ms)');
    }, 0);
    
    Promise.resolve().then(() => {
        console.log('3. Promise 1 résolue');
    });
    
    console.log('4. Avant appel fonction secondaire');
    
    processPromises();
    
    console.log('5. Après appel fonction secondaire');
    
    setTimeout(() => {
        console.log('6. Timeout 2 (10ms)');
    }, 10);
}

console.log('0. Avant appel executeTasks()');
executeTasks();
console.log('13. Après appel executeTasks()');


/* 
QUESTION POUR LE CANDIDAT :
Dans quel ordre ces 10 console.log() vont-ils s'afficher ?
Expliquez votre raisonnement en vous basant sur :
- La pile d'exécution (call stack)
- La file des microtâches (microtask queue)
- La file des macrotâches (macrotask queue)
- L'event loop

RÉPONSE ATTENDUE :
0. Avant appel executeTasks()
1. Début fonction principale
4. Avant appel fonction secondaire  
7. Début fonction secondaire
12. Fin fonction secondaire
5. Après appel fonction secondaire
13. Après appel executeTasks()
3. Promise 1 résolue
8. Promise 2 résolue
9. Erreur capturée dans Promise: Erreur simulée
2. Timeout 1 (0ms)
10. Timeout 3 (5ms)
6. Timeout 2 (10ms)

POINTS SUPPLÉMENTAIRES À ANALYSER :
- Le try/catch ne capture PAS les erreurs dans les Promises (gestion asynchrone)
- Les erreurs dans les Promises sont gérées par .catch() 
- Le console.log 11 ne s'affichera jamais car l'erreur est dans une microtâche
*/
