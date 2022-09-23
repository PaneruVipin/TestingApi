/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Mail from '@ioc:Adonis/Addons/Mail'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Route from '@ioc:Adonis/Core/Route'
import Verifymail from 'App/Mailers/Verifymail'
import User from 'App/Models/User'

Route.get('', ()=>{
      return {'hello':'world'}
    })
Route.post('login', 'AuthController.login')
Route.post('signUp', 'AuthController.signUp')

Route.group(()=>{
Route.get('me', 'UsersController.me')
Route.put('me','UsersController.updateMe')
Route.group(
  ()=> Route.resource('user','UsersController').apiOnly().middleware({
    '*':'accesController:admin,super_admin',
    'destroy':'accesController:super_admin'
  })
).prefix('admin')
}).middleware('auth')

Route.get('health', async ({ response }) => {
    const report = await HealthCheck.getReport()
  
    return report.healthy
      ? response.ok(report)
      : response.badRequest(report)
  })

 
