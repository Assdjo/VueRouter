<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
          <th>Email</th>
          <th>Age</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.nom }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.age }}</td>
            <td>
              <RouterLink :to="`/show-user/${user.id}`">Voir</RouterLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <RouterView></RouterView>
  </template>
  
  <script setup lang='ts'>
 
  const users = [
      { id: 1, nom: "Alice Dupont", email: "alice.dupont@example.com", age: 28 },
      { id: 2, nom: "Bob Martin", email: "bob.martin@example.com", age: 34 },
      { id: 3, nom: "Chloé Bernard", email: "chloe.bernard@example.com", age: 22 },
      { id: 4, nom: "David Lefèvre", email: "david.lefevre@example.com", age: 45 },
      { id: 5, nom: "Emma Dubois", email: "emma.dubois@example.com", age: 30 },
      { id: 6, nom: "François Moreau", email: "francois.moreau@example.com", age: 40 },
      { id: 7, nom: "Gabrielle Petit", email: "gabrielle.petit@example.com", age: 26 },
      { id: 8, nom: "Hugo Girard", email: "hugo.girard@example.com", age: 31 },
      { id: 9, nom: "Isabelle Fontaine", email: "isabelle.fontaine@example.com", age: 29 },
      { id: 10, nom: "Julien Roy", email: "julien.roy@example.com", age: 37 },
      { id: 11, nom: "Karine Lambert", email: "karine.lambert@example.com", age: 24 },
      { id: 12, nom: "Louis Simon", email: "louis.simon@example.com", age: 33 },
      { id: 13, nom: "Marie Leroy", email: "marie.leroy@example.com", age: 27 },
      { id: 14, nom: "Nicolas Rousseau", email: "nicolas.rousseau@example.com", age: 35 },
      { id: 15, nom: "Olivia Mercier", email: "olivia.mercier@example.com", age: 23 },
      { id: 16, nom: "Pierre Gauthier", email: "pierre.gauthier@example.com", age: 42 },
      { id: 17, nom: "Quentin Blanchard", email: "quentin.blanchard@example.com", age: 39 },
      { id: 18, nom: "Roxane Caron", email: "roxane.caron@example.com", age: 25 },
      { id: 19, nom: "Sébastien Lefebvre", email: "sebastien.lefebvre@example.com", age: 36 },
      { id: 20, nom: "Tania Dupuis", email: "tania.dupuis@example.com", age: 32 },
      { id: 21, nom: "Ugo Chevalier", email: "ugo.chevalier@example.com", age: 41 },
      { id: 22, nom: "Valérie Gagnon", email: "valerie.gagnon@example.com", age: 38 },
      { id: 23, nom: "William Royer", email:"william.royer@example.com" , age :26},
      { id :24 ,nom :"Xavier Fontaine" ,email :"xavier.fontaine@example.com" ,age :30},
      { id :25 ,nom :"Yasmine Pires" ,email :"yasmine.pires@example.com" ,age :29},
      { id :26 ,nom :"Zacharie Dupre" ,email :"zacharie.dupre@example.com" ,age :34},
      { id :27 ,nom :"Anaïs Martin" ,email :"anais.martin@example.com" ,age :22},
      { id :28 ,nom :"Bastien Morel" ,email :"bastien.morel@example.com" ,age :35},
      { id :29 ,nom :"Céline Richard" ,email :"celine.richard@example.com" ,age :31},
      { id :30 ,nom :"Doriane Lemoine" ,email :"doriane.lemoine@example.com" ,age :27}
  ];
  
  
  </script>
  
  <style scoped></style>