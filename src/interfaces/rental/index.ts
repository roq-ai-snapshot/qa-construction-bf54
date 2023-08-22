import { ToolInterface } from 'interfaces/tool';
import { OutletInterface } from 'interfaces/outlet';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RentalInterface {
  id?: string;
  tool_id: string;
  outlet_id: string;
  user_id: string;
  rental_date?: any;
  return_date?: any;
  created_at?: any;
  updated_at?: any;

  tool?: ToolInterface;
  outlet?: OutletInterface;
  user?: UserInterface;
  _count?: {};
}

export interface RentalGetQueryInterface extends GetQueryInterface {
  id?: string;
  tool_id?: string;
  outlet_id?: string;
  user_id?: string;
}
