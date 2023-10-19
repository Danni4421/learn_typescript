# Learn How Typescript Work's

## 1. Introduction

Typescript secara umum merupakan Javascript yang memiliki sintaksis satu tingkat diatas Javascript biasa, Karena mengizinkan kita sebagai developer untuk dapat menambahkan sebuah `types`.

## 2. How to Use it?

Cara yang paling sering digunakan dalam menggunakan typescript yaitu dengan menggunakan Typescript compiler, jadi akan menerjemahkan kode Typescript menjadi kode Javascript.

### Configuration

Untuk konfigurasi pengaturan pada Typescript dapat melihat pada dokumentasi berikut : <br> [Typescript Configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## 3. Data Types

| Data Type | Mean                                                                                                                 |
| :-------- | :------------------------------------------------------------------------------------------------------------------- |
| `boolean` | Tipe data dasar yang paling simple dengan nilai true/false                                                           |
| `number`  | Menyimpan semua nilai angka dan juga float (_desimal_)                                                               |
| `bigint`  | Menyimpan nilai angka besar baik itu negatif dan positif                                                             |
| `string`  | Tipe data string merujuk pada sebuah text, dapat dibuat dengan petik dua ataupun satu                                |
| `Array`   | Menyimpan banyak nilai pada satu tempat, dapat juga menyimpan nilai yan generic dengan menggunakan `Array<dataType>` |
| `any`     | Dapat memasukkan data apapun karena tidak akan terdapat pengecekan tipe data jika menggunakan any                    |

## 4. Type Annotations on Variables

Ketike melakukan deklarasi variable kita bisa secara opsional menambahkan tipe data pada variabel tersebut, Teknik tersebut biasanya disebut sebagai menambahkan tipe data secara explicit, Secara explicit dapat dilakukan dengan cara berikut

```typescript
const firstName: string = 'John Doe';
```

Atau jika pada deklarasi tidak menambahkan tipe data secara explicit maka secara implicit tipe data variabel akan sesuai dengan nilai inisialisasi awal, Seperti contoh berikut

```typescript
let firstName = 'John Doe'; // inisialisasi tipe data string
firstName = 1200000; // error: tipe data 'number' tidak dapat dimasukkan pada variabel 'string'
```

## 5. Functions

### Parameter Type Annotations

Pada Typescript memungkinkan kita untuk menambahkan tipe data pada argument ataupun return value yang akan dikembalikan dari fungsi tersebut, berikut contohnya :

```typescript
function sayHello(name: string) {
  return `Hello ${name}`; // return string Hello name
}
```

Ketika parameter memiliki anotasi tipe data maka argument pada method tersebut akan dilakukan pengecekan.

```typescript
sayHello(5); // error: Argument of type 'number' is not assignable to parameter of type 'string'.
```

### Return Type Annotations

```typescript
function sayHelloWorld(): string {
  return 'Hello World!!';
}
```

### Void Functions

Function void biasanya digunakan ketika sebuah fungsi tidak memiliki nilai yang akan dikembalikan sehingga lebih tepat untuk menggunakan anotasi void.

```typescript
function sayHelloWorldVoid(): void {
  console.log('Hello World!');
}
```

### Functions Which Return Promises

```typescript
async function getHumidity(lat: number, long: number): Promise<number> {
  const weather = new Weather(lat, long);
  const humidity: Promise<number> = await weather.getHumidity();
  return humidity;
}
```

### Anonymous Functions

Fungsi anonim sedikit berbeda dari deklarasi fungsi biasanya. Parameter fungsi anonim secara otomatis diberi tipe.

```typescript
const names: string[] = ['Alice', 'Bob', 'John'];
names.forEach((name) => {
  console.log(name);
});
```

## 6. Object Types

Untuk tipe data object cukup melakukan list properti sekaligus tipe data nya, misal :

```typescript
function walk(pt: { x: number; y: number }): void {
  console.log('coordinate x right now!', pt.x);
  console.log('coordinate y right now!', pt.y);
}
```

Separator pada object tersebut dapat menggunakan either `;` ataupun yang paling sering yaitu menggunakan `,`. Kemudian terdapat juga optional properties dimana bisa jadi properti itu dibutuhkan atau tidak.

### Optional Properties

Jadi untuk membuah properti menjadi sifatnya opsional kita dapat menggunakan `?` untuk menandakan bahwa properti tersebut adalah opsional, misal seperti berikut:

```typescript
function printName(obj: { firstName: string; lastName?: string }) {
  // code
}
printName({ firstName: 'Alice' });
printName({ firstName: 'John', lastName: 'Doe' });
```

Dapat kita lihat pada contoh diatas bahwa jika properti bersifat opsional maka kita dapat memberi argument object dengan properti hanya firstName maupun dengan lastName. Namun ini akan menjadi masalah dalam penggunaan nya. Kenapa?, berikut adalah masalahnya!

Anggap saja kita akan menggunakan fungsi sebelumnya untuk mengembalikan nilai firstName dan lastName namun sebelum itu kita akan membuat nama tersebut menjadi uppercase maka akan menjadi seperti ini.

```typescript
function printName(obj: { firstName: string; lastName?: string }) {
  return obj.firstName.toUpperCase() + ' ' + obj.lastName.toUpperCase(); // obj lastName is possibly undefined
}
```

Nahh disinilah permasalahannya jika kita memakai object opsional, mungkin saja properti tersebut tidak ada sehingga memiliki nilai `undefined`, Nahh bagaimana cara untuk mengatasinya?

Kita dapat menggunakan validasi diawal sebelum menggunakannya seperti melakukan checking untuk tipe dari properti tersebut apakah undefined atau tidak, Atau kita bisa menggunakan shorcut `?` ketika menggunakan properti, Jadi apabila properti telah terdefinisikan maka method akan dijalankan begitu juga sebaliknya jika memang properti tidak didefinisikan maka tidak akan menjalankan method.

```typescript
function printName(obj: { firstName: string; lastName?: string }) {
  return obj.firstName.toUpperCase() + ' ' + obj.lastName?.toUpperCase();
}
```

## 7. Union Types

Maksud dari tipe union ini adalah kita dapat untuk menggabungkan atau mengkombinasikan beberapa tipe data untuk sebuah variabel, Jadi sebuah variabel mungkin saja memiliki banyak jenis tipe data, Let say misal kita punya contoh seperti ini:

```typescript
function printId(id: number | string): void {
  console.log('Your Id is', id);
}
```

Jadi fungsi diatas kita dapat memberikan argument berupa baik itu number maupun string, contoh seperti berikut

```typescript
printId('11101'); // OK!!
printId(11101); // OK!!
```

## 8. Type Aliases

Ketika kita menginginkan beberapa variabel atau function memiliki tipe yang sama, alih alih kita menerapkan anotasi manual setiap variabel atau function lebih baik untuk kita menggunakan Type Aliases. Apa itu?, ada baiknya kita lihat contoh saja.

```typescript
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point): void {
  console.log('X Coordinate : ', pt.x);
  console.log('Y Coordinate : ', pt.y);
}

function walk(pt: Point): void {
  console.log('Walking', x + 1, y + 1);
}
```

Dapat kita lihat dari kedua fungsi diatas, alih alih kita menggunakan anotasi anonim seperti `{x: number; y: number}`, Namun akan lebih praktis untuk dibungkus ke dalam sebuah `type` agar kemudian dapat digunakan kembali pada banyak case.

## 9. Interfaces

Sama halnya seperti Type Aliases sebelumnya, Sama sama sebuah type yang dapat kita gunakan untuk menentukan tipe sebuah variabel atau parameter. Lalu apa yang membedakan Type Aliases dengan Interfaces?

Kita dapat bebas memilih antara keduanya, karena memang hampir semua fitur dari Interfaces terdapat pada Type Aliases. Namun perbedaan utama yang membedakan keduanya yaitu Type Aliases tidak dapat dibuka kembali untuk menambahkan sebuah properti baru, Sedangkan dengan interfaces kita dapat membuka kembali guna menambahkan properti baru.

```typescript
// Interfaces
interface Animal {
  eat: String;
}

interface Animal {
  sleep: Boolean;
}

const animal: Animal = { eat: 'Grass', sleep: true };
console.log(hewan); /* { eat: 'Grass', sleep: true } */

// Type Aliases
type Machine = {
  isRun: Boolean;
};

type Machine = {
  shuttingDown: Boolean;
};

// Error: Duplicate identifier 'Machine'
```

Nahh, nampak jelaskan perbedaan antara kita menggunakan interfaces dan juga Type Aliases dimana untuk menambahkan properti pada interface kita cukup mendefinisikan kembali interface tersebut dan menuliskan properti baru. Lalu, berarti kita ngga dapat nambah properti dong ke Type Aliases?

Eittss santai dulu, kita tetap bisa menambahkan properti baru kok di Types Aliases dengan melalui cara Insertions. Gimana itu?, Mari kita ambil contoh sebelumnya

```typescript
type Machine = {
  isRun: Boolean;
};

type UpdatedMachine = Machine & {
  shuttingDown: Boolean;
};

// UpdatedMachine: { isRun: Boolean, shuttingDown: Boolean }
```

Nahh cara diatas yaitu kita bisa membuat type baru dengan cara menggabungkan type Machine dan juga type dengan properti baru, Jika pada contoh yaitu dengan basic annotation `{shuttingDown: Boolean}`

## 10. Class

Seperti pada bahasa pemrograman berorientasi object lainnya. Class pada typescript juga hampir mirip dengan yang lain, seperti menyajikan keyword `class` juga untuk penggunaan mirip seperti dengan bahasa lain.

```typescript
class Animal {
  public eat: String;
  constructor(eat: String) {
    this.eat = eat;
  }
}
```

Dapat kita lihat diatas kita pasti sudah tidak asing dengan penerapan class seperti diatas. Tentu yang sudah sering menggunakan OOP tidak asing dengan contoh diatas.

### Modifiers

Pada typescript juga menyediakan modifiers seperti
`public`, `private`, ataupun `protected` sehingga kita dapat memanfaatkan fitur class dengan sebaik mungkin melalui modifiers tersebut, misal :

```typescript
class Person {
  private name: String;
  constructor(name: String) {
    this.name = name;
  }

  public setName(name: String): void {
    this.name = name;
  }

  public getName(): String {
    return this.name;
  }
}
```

Nahh seperti yang bisa kita lihat apabila menggunakan modifiers kita dapat menerapkan konsep dalam Object Oriented Programming seperti Getter dan Setter lebih baik karena memang Getter dan Setter biasanya digunakan pada field atau attribute yang bersifat private.
